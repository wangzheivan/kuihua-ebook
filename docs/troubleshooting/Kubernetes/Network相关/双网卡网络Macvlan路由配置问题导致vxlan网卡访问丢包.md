
# 双网卡网络Macvlan路由配置问题导致vxlan网卡访问丢包

|作者|万绍远|
|---|---
|团队|Filed&&Suppoort
|编写时间|2020/10/28
|类型|常见问题-网络相关

---

## 问题现象
使用canal+Macvlan网络插件发现去ping vxlan网络出现丢包或无法访问情况。

## 问题原因
主要是因为Macvlan网络添加的路由CIDR，包含了宿主机所在的网段，因为canal网络发送数据包到本地POD没有像flannel一样通过CNI0网桥进行转发，而是直接通过明细路由转发到POD内，所以这里使用的源IP是宿主机的ip，导致pod回包时，因为pod内有macvlan网卡会生成对应的路由，宿主机同网段的路由直接走eth1了。

## 问题解决
将宿主机所在网段做为明细路由通过指定网络出口方式添加。