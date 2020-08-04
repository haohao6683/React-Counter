export const increase = (counters) => {
    return {
        type: 'INCREASE',
        counters: counters
    }
}

export const decrease = (counters) => {
    return {
        type: 'DECREASE',
        counters: counters
    }
}