/* eslint-disable react-hooks/exhaustive-deps */

import { getToken } from '@/lib/api/ExternalApi';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useMutation } from 'react-query';

export default function CallBackNotion() {
    const router = useRouter();
    let code = null;
    code = router.query.code;
    

    const { mutate: getTokenNotion } = useMutation({
        mutationKey: 'tokenNotion',
        mutationFn: (auth_code) => getToken(auth_code),
        onSuccess: () => {
            router.push(`/helpdesk-dashboard`);
        },
        onError: (error: any) => {
            code !== undefined && (
                alert(error.response.data.message ?? error.response.data),
                router.push(`/helpdesk-dashboard`)
            )
        }
    });

    useEffect(() => {
        getTokenNotion(code);
    }, [code]);
    return (
        <div className='flex flex-wrap items-center justify-center py-2 gap-6 md:py-4 md:gap-0 w-full min-h-screen'>
            <p>Authorize...</p>
        </div>
    );
}
