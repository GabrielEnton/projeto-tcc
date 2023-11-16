export const copyToClipboeard = (text) => {
    if(!navigator.clipboard){
        return;
    }

    return navigator.clipboard.writeText(text).catch(() => {
        console.error('Navigator clipboard: Cound not copy text');
    });
}