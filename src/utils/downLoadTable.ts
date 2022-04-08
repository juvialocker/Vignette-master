export const downLoad = (title: any, data: any, that: any) => {
	if (data.staus != 500) {
		let blob = new Blob([data], { type: 'application/vnd.openxmlformats-  officedocument.spreadsheetml.sheet;charset=utf-8' }); //type这里表示xlsx类型
		let downloadElement = document.createElement('a');
		let href = window.URL.createObjectURL(blob); //创建下载的链接
		downloadElement.href = href;
		downloadElement.download = `${title}.xlsx`; //下载后文件名
		document.body.appendChild(downloadElement);
		downloadElement.click(); //点击下载
		document.body.removeChild(downloadElement); //下载完成移除元素
		window.URL.revokeObjectURL(href); //释放掉blob对象 
		that.visibleSpin = false;
		that.$Message.success("导出表格成功");
	} else {
		that.$Message.error("导出表格失败");
	}
	setTimeout(() => {
		that.visibleSpin = false;
	}, 60000)
}

//使用方法
// import { downLoad } from "@/utils/downLoadTable";
// import * as service from "@/service";

// public exportTable() {
// 	this.visibleSpin = true;
// 	let params: any = {
//  	phone: this.phone
// 	};
// 	service
// 		.exportExcel(params)
// 		.then(({ data }) => {
// 			downLoad(`派工单已完成列表`, data, this);
// 		})
// 		.catch((error) => {
// 			this.visibleSpin = false;
// 			this.$Message.error("导出表格超时");
// 		});
// }
