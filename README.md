# Mango-Database

Mango-Database 芒果生活数据库设计项目，使用 `typeorm` + `typescript`，初始化构建。

## 要求：

- Mysql 5.7
- NodeJs 14+

## 运行

### 创建 `.env` 配置文件

在根目录创建配置文件，内容示例，必须包含以下六项：

```yaml
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=root
DB_NAME=test
```

### 编译 ts 文件为 js

```bash
npm run m:build
```

### 操作数据库，初始化

```bash
npm run m:run
```

### 回滚操作

```bash
npm run m:revert
```

### 创建 migration

```bash
typeorm entity:create --name xxxx
```