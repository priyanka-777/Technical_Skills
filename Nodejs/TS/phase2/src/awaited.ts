
// here in this function it is returning a promise<number>
async function doSomething() {
    return 3
}

type value = Awaited<ReturnType<typeof doSomething>>
// when we use Awaited it will take only number as type