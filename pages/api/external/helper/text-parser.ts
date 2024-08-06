import { Client, iteratePaginatedAPI } from "@notionhq/client";

let datas = [];

let texts = [];

/* 
---------------------------------------------------------------------------
* taken from https://github.com/makenotion/notion-sdk-js/tree/main/examples/parse-text-from-any-block-type with some modification
*/

const getPlainTextFromRichText = (richText) => {
  return richText.map((text) => text.plain_text).join("");
};

// Use the source URL and optional caption from media blocks (file, video, etc.)
const getMediaSourceText = (block) => {
  let source, caption;

  if (block[block.type].external) {
    source = block[block.type].external.url;
  } else if (block[block.type].file) {
    source = block[block.type].file.url;
  } else if (block[block.type].url) {
    source = block[block.type].url;
  } else {
    source = "[Missing case for media block types]: " + block.type;
  }
  // If there's a caption, return it with the source
  if (block[block.type].caption.length) {
    caption = getPlainTextFromRichText(block[block.type].caption);
    return caption + ": " + source;
  }
  // If no caption, just return the source URL
  return source;
};

// Get the plain text from any block type supported by the public API.
const getTextFromBlock = (block) => {
  let text;

  // Get rich text from blocks that support it
  if (block[block.type].rich_text) {
    // This will be an empty string if it's an empty line.
    text = getPlainTextFromRichText(block[block.type].rich_text);
  }
  // Get text for block types that don't have rich text
  else {
    switch (block.type) {
      case "unsupported":
        // The public API does not support all block types yet
        text = "[Unsupported block type]";
        break;
      case "bookmark":
        text = block.bookmark.url;
        break;
      case "child_database":
        text = block.child_database.title;
        // Use "Query a database" endpoint to get db rows: https://developers.notion.com/reference/post-database-query
        // Use "Retrieve a database" endpoint to get additional properties: https://developers.notion.com/reference/retrieve-a-database
        break;
      case "child_page":
        text = block.child_page.title;
        break;
      case "embed":
      case "video":
      case "file":
      case "image":
      case "pdf":
        text = getMediaSourceText(block);
        break;
      case "equation":
        text = block.equation.expression;
        break;
      case "link_preview":
        text = block.link_preview.url;
        break;
      case "synced_block":
        // Provides ID for block it's synced with.
        text = block.synced_block.synced_from
          ? "This block is synced with a block with the following ID: " +
            block.synced_block.synced_from[block.synced_block.synced_from.type]
          : "Source sync block that another blocked is synced with.";
        break;
      case "table":
        // Only contains table properties.
        // Fetch children blocks for more details.
        text = "Table width: " + block.table.table_width;
        break;
      case "table_of_contents":
        // Does not include text from ToC; just the color
        text = "ToC color: " + block.table_of_contents.color;
        break;
      // case "bulleted_list_item":
      //   text = block.
      //   break
      case "breadcrumb":
      case "column_list":
      case "divider":
        text = "No text available";
        break;
      default:
        text = "[Needs case added]";
        break;
    }
  }
  // Blocks with the has_children property will require fetching the child blocks. (Not included in this example.)
  // e.g. nested bulleted lists
  if (block.has_children) {
    // For now, we'll just flag there are children blocks.
    text = text;
    // console.log(block)
  }
  // Includes block type for readability. Update formatting as needed.
  // return block.type + ": " + text

  datas.push({
    title: text,
    id: block.id,
    parentId: block.parent.page_id
  });

  return text;
};

async function retrieveBlockChildren(id, token) {
  const blocks = [];
  const notion = new Client({ auth: token });

  // Use iteratePaginatedAPI helper function to get all blocks first-level blocks on the page
  for await (const block of iteratePaginatedAPI(notion.blocks.children.list, {
    block_id: id, // A page ID can be passed as a block ID: https://developers.notion.com/docs/working-with-page-content#modeling-content-as-blocks
  })) {
    blocks.push(block);
  }

  return blocks;
}

const printBlockText = (blocks) => {
  for (let i = 0; i < blocks.length; i++) {
    const text = getTextFromBlock(blocks[i]);

    texts.push(text);
  }
};

export async function textParser(isPage: boolean, pageId: string, token: string) {
  // Make API call to retrieve all block children from the page provided in .env
  const blocks = await retrieveBlockChildren(pageId, token);

  printBlockText(blocks);

  if (isPage === false) {
    const res = datas;

    datas = [];

    return res;
  }

  const res = texts;

  texts = [];

  return blocks;
}

export async function getPage(id, token) {
  let result = null;
  const notion = new Client({ auth: token });
  try {
    result = {
      code: 200,
      success: true,
      message: "Success get data",
      data: await notion.pages.retrieve({ page_id: id })
    };
  } catch (error) {
    error.status === 404 ? (
      result = {
        code: 404,
        success: true,
        message: "Article Not Publish Yet",
        data: null
      }
    ): (
      result = {
        code: error.status,
        success: true,
        message: error.message,
        data: null
      }
    )
  }
  return result;
};


