import add_numbers from "./sum";

test("testing for sum function",()=>{
    expect(add_numbers(10,20)).toBe(30)
});

// test("testing for sum functions",()=>{
//     expect(add_numbers(20,20)).toBe(40)
// });
