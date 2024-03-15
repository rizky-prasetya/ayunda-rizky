export function formatDate(date: Date, format: string) {
    const z = {
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
    };

    return format
        .replace(/(M+|d+|h+|m+|s+)/g, (v) =>
            (
                (v.length > 1 ? '0' : '') + z[v.slice(-1) as keyof typeof z]
            ).slice(-2),
        )

        .replace(/(y+)/g, (v) =>
            date.getFullYear().toString().slice(-v.length),
        );
}

export function compareDesc(dateLeft: Date, dateRight: Date): number {
    const diff = +new Date(dateLeft) - +new Date(dateRight);

    return diff > 0 ? -1 : diff < 0 ? 1 : diff;
}
