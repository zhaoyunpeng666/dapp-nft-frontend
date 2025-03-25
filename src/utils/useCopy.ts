import { useState } from 'react';
import { toast } from "react-toastify";

type CopyHandlerType = (text: string) => Promise<void>;
type CopyHookReturnType = [boolean, CopyHandlerType];
type CopyHookType = (timeout?: number) => CopyHookReturnType;

export const useCopy: CopyHookType = () => {
    const [copied, setCopied] = useState(false);
    
    const copyHandler: CopyHandlerType = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            toast.success('Address copied to clipboard!');
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.log('📍 useCopy.ts 📍 copyHander 📍 error:', error);
            setCopied(false);
        }
    };
    
    return [copied, copyHandler];
}
