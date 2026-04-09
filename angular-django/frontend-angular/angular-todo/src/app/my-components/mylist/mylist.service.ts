
export class TodoListService {

    private todoList: string[] = [ "Todo List 1", "Todo List 2", "Todo List 3", "Todo List 4", "Todo List 5" ];

    getMyList() {        
        return this.todoList;
    }

}