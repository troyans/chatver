

export default function Breadcrumb({data=[]}) {
  return (
    <>
        {
            data.map((item, index) => (
                <div key={index} className="flex gap-x-4">
                    <a href={item.link} className="">{ item.name }</a>
                    {index != data.length -1 && <p className="">{`>`}</p>}
                </div>
            ))
        }
    </>
  )
}
