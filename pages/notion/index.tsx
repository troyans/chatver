/* eslint-disable react-hooks/exhaustive-deps */

import { getToken } from '@/lib/api/ExternalApi';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useMutation } from 'react-query';

// page ini digunakan sebagi url callback setelah success integration
export default function CallBackNotion() {
    // mengambil code khusus dari notion yang dibawa lewat url callback
    const router = useRouter();
    let code = null;
    code = router.query.code;
    

    // melakukan request ke api untuk mendapatkan token notion
    const { mutate: getTokenNotion } = useMutation({
        mutationKey: 'tokenNotion',
        mutationFn: (auth_code) => getToken(auth_code),
        onSuccess: () => {
            // jika suskses diarahkan kembali ke helpdesk dashboard dengan informasi terbaru
            router.push(`/helpdesk-dashboard`);
        },
        onError: (error: any) => {
            // jika gagal juga akan diarahkan ke dashboard tanpa membawa informasi baru
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
