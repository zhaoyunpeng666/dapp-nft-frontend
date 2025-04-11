export const calculateTime = (endTime: string): number => {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const timeDifference = end - now;
    // 保留两位小数
    const hoursUntil = timeDifference / (1000 * 60 * 60);
    return hoursUntil > 0 ? Number(hoursUntil.toFixed(1)) : 0;
}
