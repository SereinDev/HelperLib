# HelperLib

- 适用于 **Serein**的`JavaScript`插件的 `TypeScript`辅助库
- 当前适用版本 `v1.3.5`

## 使用方法

1. 建议使用[Visual Studio Code](https://code.visualstudio.com/)或其他带有语法提示的代码编辑器编写插件
2. 将此文件夹复制到`plugins`下，目录结构示意如下
    ```txt
    ├─Serein-??.exe
    └─plugins
        └─HelperLib
            index.d.ts
            ...（其他.d.ts文件）
    ```
3. 在你的插件第一行加上下面这两行
    ```js
    /// <reference path="HelperLib/index.d.ts"/>
    /// @ts-check
    ```
4. 这时候就可以自动补全和显示函数参数了。也就可以快乐地写插件了
