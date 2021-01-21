const ExamRoom = function(N) {
    this.N = N;
    this.students =[];
  };
  
ExamRoom.prototype.seat = function() {
    let student = 0;
    if (this.students.length > 0) {
        let dist = this.students[0];
        let prev = null;
        for (let s of this.students) {
            if (prev != null) {
                let d = Math.floor((s - prev) / 2);
                if (d > dist) {
                    dist = d;
                    student = prev + d;
                }
            }
            prev = s;
        }
        let tempArr=this.students
        if (this.N - 1 - tempArr[tempArr.length-1] > dist)
            student = this.N - 1;
        }
    if(!this.students.includes(student)) this.students.push(student);
    this.students.sort((a,b)=>a-b);
    return student;
}
  
ExamRoom.prototype.leave = function(p) {
    this.students=this.students.filter(v=> v!==p)
    this.students.sort((a,b)=>a-b)
}


const obj = new ExamRoom(10);
obj.seat();
console.log(obj.seats);
obj.seat();
console.log(obj.seats);
obj.seat();
console.log(obj.seats);
obj.seat();
console.log(obj.seats);
obj.leave(4);
console.log(obj.seats);
obj.seat();
console.log(obj.seats);
