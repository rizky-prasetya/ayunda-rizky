export function formatDate(date: Date, format: string) {
    const z = {
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
    };

    format = format.replace(/(M+|d+|h+|m+|s+)/g, (v) =>
        ((v.length > 1 ? '0' : '') + z[v as keyof typeof z]).slice(-2),
    );

    return format.replace(/(y+)/g, (v) =>
        date.getFullYear().toString().slice(-v.length),
    );
}

export function compareDesc(dateLeft: Date, dateRight: Date): number {
    const diff = +new Date(dateLeft) - +new Date(dateRight);

    return diff > 0 ? -1 : diff < 0 ? 1 : diff;
}