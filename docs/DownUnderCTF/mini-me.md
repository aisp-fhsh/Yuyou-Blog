# DownUnderCTF - 2025
###### Contributed by @zyyuyou

## mini me / Web

> [!NOTE]
> 
> Challenge Description
> 
> The app looks scrambled and full of brainrot! But ther's more than meets the eye. Dive into the code, connect the dots, and see if you can uncover what's really going on behind the scenes, or right at the front!
> [main-app.zip](https://storage.googleapis.com/downunderctf-2025-noctf-files/noctf-files/Qmuz3rnEMZXiRN_57b0m9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GOOG1ELBSKCSEHWDHBGZCFZBP3RXLJBHVAZJTTYKCMYMRJRM6O5N35G46S26H%2F20250720%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250720T090000Z&X-Amz-Expires=1200&X-Amz-SignedHeaders=host&X-Amz-Signature=24658a889e65add7c1be1c04a7aa8e0ab5c6896fa901b087dcf9b19861bc063d)

### Solution
---
一開始點進那個網頁時，看到了一個登入畫面。

![](image/mini-me1.png)

想說會不會是 SQL Injection ，結果我不管輸入什麼，他都可以登入進去。所以我就先判斷說這題與身份驗證應該無關。點進去之後就出現了這個畫面

![](image/mini-me2.png)

接著我就把聲音打開來，然後就直接被這個 Tong Tong Tong Tong Sahur 嚇到.. ＝＝ 

![](image/mini-me3.png)

接下來我就打算先去分析他給我的 .zip 檔案中會不會有什麼取得 Flag 的關鍵因素。結果其中就發現了他網站後端的 app.py 

![](image/mini-me4.png)

仔細觀察後，發現其中的程式碼有一個是可以獲取 Flag 的。結果就在他程式碼最下面發現了 Flag 的獲取方式。他限制了 HTTP Method 只能用 POST 。 
並且 HTTP header 欄位中， key 欄位也要等於 API_SECRET_KEY 。才會回傳 Flag。

![](image/mini-me5.png)

因為前面的觀查，所以我決定去看一下網頁原始碼中有沒有洩漏相關資訊。
結果我發現他網頁的原始碼中，都有一個 `<script src="/static/js/main.min.js"></script>` 所以我就決定點進去看一下有沒有可以利用的，結果他是被壓縮過後的 == 

![](image/mini-me6.png)

結果就發現程式碼的最後，他沒有把他 Source Map 的檔案名稱的註解刪掉！ 
所以我就將我網址路徑改為

[https://web-mini-me-ab6d19a7ea6e.2025.ductf.net/static/js/test-main.min.js.map](https://web-mini-me-ab6d19a7ea6e.2025.ductf.net/static/js/test-main.min.js.map) 

去連到這個網址看可不可以獲取他的 Source Map。結果就有一個 `.map` 檔案回傳了！！

![](image/mini-me7.png)

因為他是 Source Map ，所以我就直接獲取了他的原始程式碼 ～
以下是他 Source Map 中紀錄原始程式碼的內容。

```python

function qyrbkc() { 
    const xtqzp = ["85"], vmsdj = ["87"], rlfka = ["77"], wfthn = ["67"], zdqo = ["40"], yclur = ["82"],
          bpxmg = ["82"], hkfav = ["70"], oqzdu = ["78"], nwtjb = ["39"], sgfyk = ["95"], utxzr = ["89"],
          jvmqa = ["67"], dpwls = ["73"], xaogc = ["34"], eqhvt = ["68"], mfzoj = ["68"], lbknc = ["92"],
          zpeds = ["84"], cvnuy = ["57"], ktwfa = ["70"], xdglo = ["87"], fjyhr = ["95"], vtuze = ["77"], awphs = ["75"];
        const dhgyvu = [xtqzp[0], vmsdj[0], rlfka[0], wfthn[0], zdqo[0], yclur[0], 
                    bpxmg[0], hkfav[0], oqzdu[0], nwtjb[0], sgfyk[0], utxzr[0], 
                    jvmqa[0], dpwls[0], xaogc[0], eqhvt[0], mfzoj[0], lbknc[0], 
                    zpeds[0], cvnuy[0], ktwfa[0], xdglo[0], fjyhr[0], vtuze[0], awphs[0]];

    const lmsvdt = dhgyvu.map((pjgrx, fkhzu) =>
        String.fromCharCode(
            Number(pjgrx) ^ (fkhzu + 1) ^ 0 
        )
    ).reduce((qdmfo, lxzhs) => qdmfo + lxzhs, ""); 
    console.log("Note: Key is now secured with heavy obfuscation, should be safe to use in prod :)");
}

```

可惜的是，可是這個直接拿去執行並不會回傳我要的 API_SECRET_KEY ，因為他會後沒有 return 出來..
所以我將此程式碼的 `console.log(...)` 替換為 `return` ，最後再加上 `getKey();` 實際執行他

```python

function getKey() { 
    const xtqzp = ["85"], vmsdj = ["87"], rlfka = ["77"], wfthn = ["67"], zdqo = ["40"], yclur = ["82"],
          bpxmg = ["82"], hkfav = ["70"], oqzdu = ["78"], nwtjb = ["39"], sgfyk = ["95"], utxzr = ["89"],
          jvmqa = ["67"], dpwls = ["73"], xaogc = ["34"], eqhvt = ["68"], mfzoj = ["68"], lbknc = ["92"],
          zpeds = ["84"], cvnuy = ["57"], ktwfa = ["70"], xdglo = ["87"], fjyhr = ["95"], vtuze = ["77"], awphs = ["75"];
    const dhgyvu = [xtqzp[0], vmsdj[0], rlfka[0], wfthn[0], zdqo[0], yclur[0], 
                bpxmg[0], hkfav[0], oqzdu[0], nwtjb[0], sgfyk[0], utxzr[0], 
                jvmqa[0], dpwls[0], xaogc[0], eqhvt[0], mfzoj[0], lbknc[0], 
                zpeds[0], cvnuy[0], ktwfa[0], xdglo[0], fjyhr[0], vtuze[0], awphs[0]];

    return dhgyvu.map((pjgrx, fkhzu) =>
        String.fromCharCode(
            Number(pjgrx) ^ (fkhzu + 1) ^ 0 
        )
    ).reduce((qdmfo, lxzhs) => qdmfo + lxzhs, ""); 
}

getKey();

```

接著拿去 console 介面執行就取得本題最重要的 API_SECRET_KEY 了！！

![](image/mini-me8.png)

接著就直接去終端機用 `curl` 指令對伺服器做 POST 請求搭配 key 的參數就得到 Flag 了！！！！！

![](image/mini-me9.png)

Flag : `DUCTF{Cl13nt-S1d3-H4ck1nG-1s-FuN}`


