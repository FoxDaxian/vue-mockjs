import Mock from 'mockjs'

Mock.Random.extend({
	images(date) {
		var url = `http://placehold.it/${Math.ceil(Math.random() * 100 + 100)}x${Math.ceil(Math.random() * 100 +100)}/${Math.floor(Math.random()*0xffffff).toString(16)}/${Math.floor(Math.random()*0xffffff).toString(16)}`;
		return url;
	},
	chineseName(data){
		var name = eval("'\\u" + (Math.round(Math.random() * 20901) + 19968).toString(16) + "'");
		name += eval("'\\u" + (Math.round(Math.random() * 20901) + 19968).toString(16) + "'");
		if( Math.random() > 0.5 ){
			name += eval("'\\u" + (Math.round(Math.random() * 20901) + 19968).toString(16) + "'");
		}
		return name;
	}
})
export default Mock.mock('http://test.cn', {
	"data|33":[{
		"name" : "@chineseName",
		"age|1-50" : 1,
		"relevant" : "@chineseName",
		"image" : "@images"}],
	});