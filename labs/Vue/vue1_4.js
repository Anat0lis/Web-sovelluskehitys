new Vue ({
	el: '#app4',
	data: {
		list: [],
		thing:''
	},
	methods:{
		add(value){
			if(value.length>0)
			this.list.push(value)
			this.thing=''
		}
	}
});