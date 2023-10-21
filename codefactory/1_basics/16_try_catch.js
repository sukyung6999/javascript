/**
 * try...catch
 * 
 * 1) 에러를 발생시킬 때 -> 던진다고 한다. (throw)
 * 2) 에러를 명시적으로 인지할때는 -> 잡는다고 한다. (catch)
 */
function runner() {
    try {        
            console.log('Hello');
        
            throw new Error('큰 문제가 생겼습니다');
        
            console.log('code factory');
    } catch(e) {
        console.log('----catch-----');
        console.log(e);
    } finally {
        console.log('----finally----');
    }
}
runner();
