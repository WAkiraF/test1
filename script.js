new Vue({
    el:'#app',
    data(){
        return{
            text:"hello world!"
        };
    }
})

import axios from './axios';

// ElasticsearchのAPIエンドポイントを指定
const url = 'https://i-o-optimized-deployment-ad278b.es.ap-northeast-1.aws.found.io:9243';

    
export default {
  mounted(){

	// Elasticsearchからデータを取得するためのHTTP GETリクエストを送信
	axios.get(url)
		.then((response) => {
	    // レスポンスのデータを取得
			const data = response.data;
	    	console.log(data);
  		})
		.catch((error) => {
    		console.log(error);
	  	});

  }
}
