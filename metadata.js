const metadata = {
    categories: {
        troubleshooting: {
            Docker相关: "一些Docker相关问题的处理排查解决手册",
            Kubernetes相关: "一些Kubernetes相关问题的处理排查解决手册",
            操作系统相关: "一些因为操作系统引起的问题处理排查解决手册",
            应用问题相关: "一些应用无法启动/重启/非正常运行的处理排查解决手册"
        },
    },
    docs: {
        troubleshooting: {
            "troubleshooting/Docker/大量runc不释放，导致节点负载高": "大量runc不释放，导致节点负载高",
            "troubleshooting/Kubernetes/etcd相关/etcd集群中超过一半以上的节点故障导致leader选主失败": "etcd集群中超过一半以上的节点故障导致leader选主失败",
            "troubleshooting/Kubernetes/etcd相关/磁盘IOPS不足，etcd出现大量慢日志，导致K8S集群使用缓慢甚至组件故障": "磁盘IOPS不足，etcd出现大量慢日志，导致K8S集群使用缓慢甚至组件故障",
            "troubleshooting/Kubernetes/存储相关/POD使用性能低的NAS导致节点大量僵尸进程，系统负载虚高": "POD使用性能低的NAS导致节点大量僵尸进程，系统负载虚高",
            "troubleshooting/OS/Kernel/unregister_netdevice: waiting for eth0 to become free 报错": "Centos默认3.10.x waiting for eth0 to become free 报错",
            "troubleshooting/OS/Kernel/内核arp_proxy参数配置不当导致Macvlan环路": "内核arp_proxy参数配置不当导致Macvlan环路",
            "troubleshooting/Kubernetes/Network相关/canal网络MTU值设置不合理性能测试丢包率高": "canal网络MTU值设置不合理性能测试丢包率高",
            "troubleshooting/Kubernetes/Network相关/Pod IP无法释放导致无法新建Workload": "Pod IP无法释放导致无法新建Workload",
            "troubleshooting/Kubernetes/Network相关/Pod内无法访问api-server": "Pod内无法访问api-server",
            "troubleshooting/Kubernetes/Network相关/双网卡网络Macvlan路由配置问题导致vxlan网卡访问丢包": "双网卡网络Macvlan路由配置问题导致vxlan网卡访问丢包",
            "troubleshooting/application/JAVA应用，内存超出后没有进行OOMKILL": "AVA应用，内存超出Limit后没有进行OOMKILL",
        },
    },
};

module.exports = metadata;