(function(){
  'use strict';

// 親コーポネント
  var app = new Vue({
    el: '#app',
    data:{
      newItem:'',
      todos:[]
    },
    methods:{
      addItem: function(){
        var item = {title: this.newItem, isDone: false}
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index){
        if (confirm('削除しますか？')){
          this.todos.splice(index,1);
        }
      }
    },
    computed: {
      remaining: function(){
        var items = this.todos.filter(function(todo){
          return !todo.isDone;
        });
        return items.length;
      }
    }
  });
})();
