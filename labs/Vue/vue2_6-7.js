new Vue ({
	el: '#app4',
	data: {
		list: [],
		user:''
	},
	methods:{
		add(value){
			if(value.length>0)
			this.list.push(value)
			this.user=''
		},
		removeLast(){
			this.list.pop()
		},
		removeUser(index){
			this.list.splice(index, 1);
		}
	}
});