function* createIdGenerator() {
    for (let i = 1; i >= 0; i++) yield i;
}

export const idGenerator = createIdGenerator();
