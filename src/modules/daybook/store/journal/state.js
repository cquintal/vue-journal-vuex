export default () => ({
isLoading: true,
entries: [
    {
        id: new Date().getDate(),
        date: new Date().toDateString(),
        text: 'Irure in sint nostrud irure velit duis ea eiusmod cillum enim occaecat ullamco.',
        picture: null,
    },
    {
        id: new Date().getDate() + 1000,
        date: new Date().toDateString(),
        text: 'Enim tempor deserunt adipisicing culpa voluptate tempor.',
        picture: null,
    },
    {
        id: new Date().getDate() + 2000,
        date: new Date().toDateString(),
        text: 'Id culpa non excepteur id occaecat nisi laborum velit veniam sit amet.',
        picture: null,
    }

]

})