1. 格式化輸出
    
    ```python
    a = float(input())
    print(f"{a:03}")
    # 『:03』 0代表前面要補零 3代表總共要三位
    ------------------------------------
    #四捨五入
    a = float(input()) #輸入 3.15
    print({a:.2})
    # 輸出 3.20
    -------------------------------------
    d -> 整數 f -> 浮點數
    若要佔 10 個字元 
    . 的前面是要佔多少個字符，後面是要小數點後幾位
    ex:
    a = 3.1415
    預設是向右靠 如果要靠左就要 print(f"{a:<10.3f}")
    print(f"{a:10.3f}")  # 輸出     3.1415
    print(f"{a.:10d}") # 輸出         3 這邊是輸出格式，並沒有辦法幫忙做轉換。
    									  # 所以當數值為float時，就不能用 num:d10
    
    ```
    
2. 索引值 → 就是記憶體偏移量！
    
    <aside>
    
    ***為什麼 index 是從 0 開始呢？因 只要記 串列 在記憶體中的第一格的位址就可以推後面的值，所以當要第一個值的時候，偏移量就是 0***
    
    </aside>
    
    低階語言：（人類比較不容易看得懂）ex: 組合語言
    
    高階語言：（人類比較看得懂）ex: C
    
    Linked-List：資料與資料會有連結
    
    ### 正常轉換流程
    
    編譯器 就是將 程式碼（文字）轉換成 組合語言（文字  低階語言） 
    
    <aside>
    
     plaintext文字,明文  Ex: C(編譯器) , Java(直譯器) , Python(直譯器)
    
                 ⭣ （Compiler編譯器→compile編譯）or（Interpreter直譯器→Interprete直譯）
    
     Assembly組合語言 
    
                 ⭣ （Assembler組譯器 →  Assemble組譯）
    
    Machine Code( 10111001 二進位) （電腦可讀）（可執行檔 是 Machine Code 組成的！）
    
    </aside>
    
    ### 逆推（逆向工程）
    
    <aside>
    
    **disassembly**(反組譯) → **Decompile**(反編譯)
    
    （**disassembly**與**Decompile**不是程式，只是一個講法）
    
    </aside>
    
    ### Python 轉換成 Machine Code 流程
    
    *Python 是透過 Interprete 直譯器(是一行一行做成組合語言的）*
    
    python  之所以可以在跨平台處理，是因為他建了一個叫做 Python Virtual Machine
    
    也就是 Python Dode 變成 Python Object Code 在經過 Interprete(直譯) 再變成 Assemble組合語言 最後變成 Machine
    
3. 在 python 中，strings的字只能做「取值」不能做「賦值」
    
    ```python
    a = "jasper"
    print(a[0])
    #會輸出 j
    ```
    
4. `eval()` 自動幫你轉換成你要的型態，也可以將使用者輸入的值當成程式跑（***RCE漏洞***）
    
    ```python
    print(eval(input()))
    #INPUT：3*3+2
    #OUTPUT：11
    ```
    
5. `end=””`  與  `sep=””`
    
    `sep=””` 用法：設定每個值中間要放什麼
    
    ```python
    print("1","2","3",sep="嗨")
    #OUTPUT：1嗨2嗨3嗨
    ```
    
6. `ord()` 文字轉數字 、`chr()` 數字轉文字
7. 三元運算子
    
    ```python
    x = 30
    print( 'a' if a>40 else 'b')
    如果 a !> 40 就輸出 a ，否則輸出 b
    ```
    
8. 字串格式化 輸出
    1. 格式化字串（formatted Strings Literals）
    2. 字串的 format() → python用法 `print("{} {}".format( 2,1))`
        
        用於：讓別人來輸出（方便）
        
    
    ```python
    fs = "a = {a} , b = {b} "
    a,b = input().split()
    ```
    
    c.  字串插值 f-strings → 用於自己輸出最方便