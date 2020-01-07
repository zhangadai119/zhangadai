/**
 * 
 */
app.service("brandService",function($http){
	this.findAll = function(){
		return $http.get('../brand/findAll.do');
	}
	this.findPage = function(page,rows){
		return $http.get('../brand/findPage.do?page='+page+'&rows='+rows);
	}
	this.search = function(page,rows,searchEntity){
		return $http.post('../brand/search.do?page='+page+'&rows='+rows,searchEntity);
	}
	this.methodName = function(methodName,entity){
		return $http.post('../brand/'+methodName+'.do',entity);
	}
	this.findOne = function(id){
		return $http.get('../brand/findOne.do?id='+id);
	}
	this.deleteids = function(selectids){
		return $http.get('../brand/deleteids.do?ids='+selectids);
	}
	//品牌下拉列表数据
	this.selectOptionList=function(){
		return $http.get('../brand/selectOptionList.do');
	}
})