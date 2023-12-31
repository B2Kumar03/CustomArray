function Array(){
    this.arr=[]
    this.index=-1
}

Array.prototype.push=function(...parameter){
    if(parameter.length==1){
        let ele=parameter[0]
        this.index++
        this.arr[this.index]=ele
    }
    else if(parameter.length==2){
        let ele=parameter[0]
        let index1=parameter[1]
        if(index1>this.index || index1<0){
            this.index++
            this.arr[this.index]=ele
        }
        else{
            for(let i=this.arr.length;i>=index1;i--){
                
                this.arr[i]=this.arr[i-1]
            }
            this.arr[index1]=ele
            this.index++
        }
    }
// console.log(this.arr);
}

Array.prototype.pop=function(...para){
    let temp=0
    if(para.length==0){
        temp=this.arr[this.index]
        this.arr.splice(this.index,this.index)
        this.index--
        return temp
    }
    else if(para.length==1){
        let index=para[0]
        if(index>this.index || index<0){
            return false
        }
        else{
            temp=this.arr[index]
            for(let i=index;i<this.index;i++){
                this.arr[i]=this.arr[i+1]
            }
            this.arr.splice(this.index,this.index)
            // console.log(this.arr);
            this.index--
            return temp
        }
    }   
}

Array.prototype.top=function(){
    return this.arr[this.index]
}
Array.prototype.print=function(){
    console.log(this.arr)
}
Array.prototype.printReverse=function(){
    let Rarr=this.arr.reverse()
    console.log(Rarr)
}
Array.prototype.size=function(){
    let size=this.index+1
    return size;
}

//Testing of Array 

let arr=new Array()
arr.push(1)
arr.push(2)
arr.push(3)   //pushed one by one
arr.push(4)
arr.push(5)

arr.print()    //printing of array using print function // [ 1, 2, 3, 4, 5 ]

arr.push(30,4) //you can also push element in specific index using ----> push(ele,index)

arr.print()    //---->[ 1, 2, 3, 4, 30, 5 ]

arr.pop()      //if you call only pop() without any argument it delete element from top

arr.print()  // --->[ 1, 2, 3, 4, 30 ]

arr.pop(2)    //if you call pop(2) it delet element from 2 index

arr.print()  // --->[ 1, 2, 4, 30 ]

console.log(arr.top() )    //if you call top() it return top element of array which is 30

console.log(arr.size() )    //if you call size() it return size of array which is 5