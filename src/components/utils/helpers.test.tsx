import { cls } from "./helpers";

test('cls function returns correct string', () => {
    const result = cls(`
        focus:outline-none transition ease-in-out duration-300  
        rounded-full 
        px-2 py-1 text-sm rounded 
        bg-blue-500 
        cursor-not-allowed 
        mt-6 
    `);
    
    expect(result).toBe("focus:outline-none transition ease-in-out duration-300 rounded-full px-2 py-1 text-sm rounded bg-blue-500 cursor-not-allowed mt-6");
});
