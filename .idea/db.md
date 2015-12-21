Get DB infomation.
```sql
SELECT * FROM pg_database WHERE datname='webcc';
```

datname webcc 名称
datdba 16389 OID
encoding 6 字符编码
datcollate zh_CN.UTF-8 字符排序
datctype zh_CN.UTF-8 字符分类
datistemplate false 系统数据库？
datallowconn true 允许连接？
datconnlimit -1 连接数限制
datlastsysoid 12136
datfrozenxid 675
datminmxid 1
dattablespace 1663 表空间
datacl <null> 默认数据表ACL
