// โดยการคำนวณเกรดนั้นจะมีการให้คะแนนตามเกรดแต่ละช่วงเป็น 
// 80- 100 ได้เกรด A , 
// 70 - 79 ได้เกรด B , 
// 60 - 69 ได้เกรด C , 
// 50 - 59 ได้เกรด D 
// และ ต่ำกว่า 50 จะได้เกรด F โดยผู้ใช้จะต้องกรอกเป็นตัวเลขจำนวนเต็มเท่านั้น

const promptsync = require('prompt-sync')();
const use = promptsync("คุณได้คะเเนนเท่าไหร่ >> ");

const cal = function() {
    let error = "โปรดใส่ข้อมูลให้ถูกต้อง";

    if (use >= 80 || use == 100) {
        console.log("คุณได้เกรด A");
    } else if (use >= 70 || use == 79) {
        console.log("คุณได้เกรด B");
    } else if (use >= 60 || use == 69) {
        console.log("คุณได้เกรด C");
    } else if (use >= 50 || use == 59) {
        console.log("คุณได้เกรด E");
    } else {
        console.log(error);
    };
};

cal();