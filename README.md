# HelperLib

- 适用于 **Serein**的`JavaScript`插件的 `TypeScript`类型声明库
- 当前适用版本 `2.1.0`

## 使用方法

>[!TIP]
>你可以直接使用[Js](https://github.com/new?template_name=template-js&template_owner=SereinCommunity)/[Ts](https://github.com/new?template_name=template-ts&template_owner=SereinCommunity)模板创建仓库

建议使用[Visual Studio Code](https://code.visualstudio.com/)或其他带有语法提示的代码编辑器编写插件

### 1. 下载/克隆/拉取代码到本地

```sh
git clone https://github.com/SereinDev/HelperLib.git

# or

git submodule add https://github.com/SereinDev/HelperLib.git
```

### 2. 添加引用

#### 单个文件

在文件开头加上如下两行

```ts
// @ts-check
/// <reference path="path/to/lib/HelperLib/src/index.d.ts"/>
```

#### TypeScript项目

修改`tsconfig.json`

```jsonc
{
  "compilerOptions": {
    "target": "esnext",
    "lib": [
      "ES2023",
    ],
    "skipLibCheck": true,
    // 👇👇👇
    "typeRoots": [
      "path/to/lib//HelperLib/src/*.ts"
    ],
    // 👆👆👆
  },
}
```

#### JavaScript项目

修改`jsconfig.json`

```jsonc
{
  "compilerOptions": {
    "target": "esnext",
    "lib": [
      "ES2023",
    ],
    "skipLibCheck": true,
    // 👇👇👇
    "typeRoots": [
      "path/to/lib//HelperLib/src/*.ts"
    ],
    // 👆👆👆
  },
}
```

### 3. 开始编写你的插件

如果你输入`serein`后出现了和下面一样的语法提示，就说明你添加成功了

```ts
serein
      ┌───────────────────────────────────────────┐
      │[◻] serein   const serein: ScriptInstance │ 
      └───────────────────────────────────────────┘
```
