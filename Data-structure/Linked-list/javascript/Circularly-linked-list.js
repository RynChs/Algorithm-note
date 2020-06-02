// 节点
function Node(val) {
    this.val = val; // 当前节点值
    this.prev = null; // 前一个节点的地址
    this.next = null; // 下一个节点的地址
}

// 链表类
function LList() {
    this.head = new Node('head'); // 头节点
    this.head.next = this.head;
    this.find = find; // 查找节点
    this.insert = insert; // 插入节点
    this.remove = remove; // 删除节点
    this.show = show; // 显示链表
}

// 查找节点
function find(item) {
    let currNode = this.head;
    while (currNode.val !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入节点
function insert(newVal, item) {
    let newNode = new Node(newVal);
    let currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;
}

// 删除节点
function remove(item) {
    let currNode = this.find(item);
    currNode.prev.next = currNode.next;
}

// 显示链表
function show() {
    let currNode = this.head;
    while (currNode.next !== null) {
        console.log(currNode.next.val);
        currNode = currNode.next;
    }
}

// 测试
const nums = new LList();
console.log('测试插入节点');
nums.insert(1, 'head');
nums.insert(2, 1);
nums.insert(3, 2);
console.log('测试删除节点');
nums.remove(3);
nums.show(); // 1 2
