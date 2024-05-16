var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 網頁:\xa0 https://mde.tw/wcm2024 \n 網誌:\xa0 https://mde.tw/wcm2024/blog \xa0 \n 簡報:\xa0 https://mde.tw/wcm2024/reveal \xa0 \n 倉儲:\xa0 https://github.com/mdecycu/wcm2024 \xa0 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '程式執行', 'text': '以下的 html 取自:\xa0 https://mde.tw/wcm2024/downloads/brython_on_editor.txt \n \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': '程式執行.html'}, {'title': '專題', 'text': '列出修課學員的倉儲與網站連結 \n 已知可以從\xa0 https://mdewcm2024.github.io/1astud-site/downloads/1a.txt \xa0取得學員的學號與帳號資料，使用 Brython 可以設法利用 Python 語法對此資料進行處理。 \n 第一步，先取得資料，然後將每一行內容隔開後，放入數列備用。 \n 若將下列 Brython 程式碼放入 Gist，然後利用網站的\xa0 Brython 頁面，以 src 作為資料網誌的內容，就可以直接在網站上 執行第一步程式 。 \n from browser import window, ajax\n  \ndef fetch_csv_data():\n  # CSV 檔案網址\n  url = "https://mdewcm2024.github.io/1astud-site/downloads/1a.txt"\n  \n  def on_complete(req):\n    if req.status == 200 or req.status == 0:\n      # 讀取 CSV 檔案內容\n      content = req.text\n  \n      # 依照換行符號拆分資料\n      lines = content.split(\'\\n\')\n  \n      # 建立空列表儲存資料\n      data = []\n  \n      # 遍歷每一行資料\n      for line in lines:\n        # 忽略空白行\n        if line.strip() == "":\n          continue\n  \n        # 依照逗號拆分資料\n        items = line.split(\',\')\n  \n        # 將拆分後的資料加入列表\n        data.append(items)\n  \n      # 印出結果\n      print(data)\n    else:\n      print("Error:", req.text)\n  \n  # 發送 AJAX 請求\n  req = ajax.ajax()\n  req.bind(\'complete\', on_complete)\n  req.open(\'GET\', url, True)\n  req.set_header(\'content-type\', \'application/x-www-form-urlencoded\')\n  req.send()\n  \n# 呼叫函式讀取 CSV 資料\nfetch_csv_data() \n', 'tags': '', 'url': '專題.html'}, {'title': 'Blog', 'text': '', 'tags': '', 'url': 'Blog.html'}, {'title': '上課心得', 'text': '第一週 \n \xa0 \xa0本週講述了課堂模式及規劃、並設立了自己的個人網站。 \xa0 \xa0利用Replit來建立我們的個人網站、修正網站標題。 \n 第二週 \n \xa0 \xa0本週確認每個人都有建立好自己的個人網站、 利用 Replit 維護網站。 並妥善利用git. 將每次改版的內容詳細記載。這個動作的目的為可以保留歷程記錄，更能讓人知道我們在網站上變更了什麼，同時可以用改版資料來讓人信服。 \n 第三週 \n \xa0 \xa0 本週進行了小組分組( 利用 Github Classroom 建立分組網站 )。本週講述了 常用的 git 指令。 以下為基本的git指令介紹： \n \n git add . ：這個指令會將工作目錄中的所有變更加入到暫存區（ staging area ）。這包括新檔案、修改過的檔案和已刪除的檔案。 \n git push ：這個指令會將本地的提交推送到遠端倉儲。如果你在一個分支上工作，這個指令會將你的本地分支推送到遠端倉儲。 \n git pull ：這個指令會從遠端倉儲拉取最新的變更並合併到你當前的分支。這實際上是 git fetch 和 git merge 的組合。 \n git config ：這個指令用於設定 Git 的配置細節，如使用者名稱、電子郵件地址等。 \n git submodule add 倉儲網址 子目錄 ：這個指令會將一個 Git 倉儲作為子模組加入到當前倉儲。子模組允許你在一個倉儲中包含另一個倉儲。 \n git clone 倉儲網址_協定.git 指定目錄與否 ：這個指令會從提供的 URL 複製一個 Git 倉儲到本地機器。如果提供了一個目錄名稱， Git 會在那個目錄中創建一個新的倉儲；否則， Git 會在當前目錄中創建一個與倉儲名稱相同的目錄。(其中協定大多使用https)。 \n \n 第四週 \n \xa0 \xa0 本週講述了\xa0\xa0網際網路之定義(包含WWW定義、協定等)、Replit, Codespaces 與 Github 執行動態與靜態網站 \n 至於  Replit, Codespaces 與 Githu b ，它們都是開發環境，可以用來執行動態和靜態網站： \n Replit ：可以在  Replit  上執行動態網站，指令為  python3 main.py 。而執行靜態網站則需要在  Shell  執行  python3 main2.py 。 \n Codespaces ：目前我沒有找到特定的資訊關於如何在  Codespaces  上執行動態或靜態網站。然而， Codespaces  是一個完整的開發環境，因此理論上可以運行任何類型的網站，只要有適當的設定和依賴性。 \n Github ：在  Github  中，執行動態網站的指令為  python3 main.py。 \n 第五週 \n \xa0 \xa0本週講述了\xa0 Replit 平台上的分組倉儲權限設定、 如何在 Replit 執行靜態網站檢視。 \n 第六週 \n \xa0 \xa0本週講述了\xa0 Git的 歷史與希望解決的問題、如何應用ChatGPT解決不同專業的問題還有用Gitit解決產品設計問題。 \n \xa0 \xa0利用現金越來越發達的AI，幫助我們在往日遇到問題時，可以有個解決對象。 \n 第八週 \n \xa0 \xa0本週討論了教育本質，透過教育來讓學生可以了解世界的真相、謎團等等，也培育學生的各方面領域、性格、技術等等。 \n 第九週 \n \xa0 \xa0本週為期中考週，老師讓我們自行評量期中成績，大家對於自己的成績都打得很謙虛。本週也因為期中考週，所以老師讓我們提早下課，而我也跑去問老師問題，也解決了疑惑。 \n 第十週 \n \xa0 \xa0本週老師先讓我們加入了專題分組作業群組，然後講解了各式內容，要進行python的相關應用，在加入資料途中，發現了許多問題，但是在我回去翻閱過往的教學影片後，得到了解決，即使面對git push 失敗，我仍嘗試解決問題來源，最終將進度完成。 \n 第十一週 \n 本週老師操作了 如何利用replit 來進行1astud-site管理網站頁面 ，在實際操作時，因為有多數同學因操作而造成各種衝突(可能主因為沒有建立分支)，導致我們這組遲遲無法進行上傳g8頁面，而我們小組成員都無能為力，但是經過一番努力及討教，我們終於成功解決一些衝突，並順利建立g8頁面，也特別感謝我們組員的幫助下，👍讓我們順利完成這個作業✌️。 ● 老師所要講述的是，我們必須要透過自行解決問題的能力來面對外來千變萬幻的新穎問題，不僅僅是透過學習，也可以透過詢問現今日漸崛起的AI技術來幫助我們解決問題。善用這些工具，幫助我們解決各種問題、衝突。 ※利用git pull整合、合併，在來使用git status->git push。當然前提是衝突已被解決。 當然要編輯網頁內容可以使用的工具有: \n \n 使用github \n 使用Replit \n 使用靜端操作 \n 使用CodeSpaces \n \n 第十二週 \n \xa0 \xa0本週探討在 1astud-site 解決衝突、分支內容。 透過先查詢目前分支名稱後(git branch)，以切換到所想要的分支(git checkout)。 解決衝突的部分在於要先了解目前所發生的衝突(Search =======)。 至於： Responsive site  根據您的瀏覽器的硬體的設置而形成最適大小。 \n 第十三週 \n \xa0 \xa0本週如何從學校網站抓取課堂資料，因應隱私權問題，所以只能抓取班級課表。 再進行操作後，發現均不順利，依靠先前的影片才得以解決。 在與老師交談後，發現我只是按照老師的步驟執行，而並，所以我可能還要再多加努力學習才行。多加努力學習才行。 \n ajax 緩衝區 利用前端和非同步的方式來與伺服器進行取得資料庫。   網頁伺服器或客戶端至少 ’ 有 ”Post 、 client”  get \n column  來抓取學生資料，與班級課堂較無關。 \n 所需要的資料為  Flask 、 Flask-Core。 \n 第十四週 \n', 'tags': '', 'url': '上課心得.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': 'https://scrum-1.github.io/wcm2024 \xa0 \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': '週次進度', 'text': '', 'tags': '', 'url': '週次進度.html'}, {'title': 'w13', 'text': '------------------- \n Multiplayer Guessing Game \n 請猜介於 1 ~ 100 的整數:  \n Name:     Join Game \n \n Your Guess:     Guess \n \n \n \n \n \n \n \n \n \n 來源 \n ------------------ \n \n 課表 \n from flask import Flask, request \nfrom flask_cors import CORS\n\nimport requests\nimport bs4\n\n\'\'\'\n機械設計系各班 classid:\n42310: 42310四設計一訓\n\n42311: 42311四設計一甲\n42312: 42312四設計一乙\n\n42319: 42319四設計系一攜\n42320: 42320四設計二訓\n\n42321: 42321四設計二甲\n42322: 42322四設計二乙\n\n42329: 42329四設計系二攜\n42330: 42330四設計三訓\n\n42331: 42331四設計三甲\n42332: 42332四設計三乙\n\n42339: 42339四設計系三攜\n42340: 42340四設計四訓\n\n42341: 42341四設計四甲\n42342: 42342四設計四乙\n\n42349: 42349四設計系四攜\n\n第 112 學年第 2 學期, 查詢設一甲的班級課表\n\nhttps://localhost:9447/?semester=1122&classid=設一甲\n\'\'\'\n# 將班級中文縮寫與代號存入 mde dict\n\nmde ={\n"設一訓": "42310",\n"設一甲": "42311",\n"設一乙": "42312",\n"設一攜": "42319",\n"設二訓": "42320",\n"設二甲": "42321",\n"設二乙": "42322",\n"設二攜": "42329",\n"設三訓": "42330",\n"設三甲": "42331",\n"設三乙": "42332",\n"設三攜": "42339",\n"設四訓": "42340",\n"設四甲": "42341",\n"設四乙": "42342",\n"設四攜": "42349",\n"四企管三甲": "44631"\n}\n\napp = Flask(__name__)\nCORS(app)\n\n@app.route(\'/studlist\')\n@app.route(\'/\')\ndef studlist():\n    semester = request.args.get(\'semester\')\n    classid = request.args.get(\'classid\')\n    column = request.args.get(\'column\')\n\n    if semester == None:\n        semester = \'1121\'\n    if classid == None:\n        #設一甲\n        classid = \'設一甲\'\n    # 透過 mde dict 將班級中文縮寫轉為代號\n    try:\n        selclss = mde[classid]\n    except:\n        return "查無資料"\n\n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n\n    url = \'https://qry.nfu.edu.tw/jclass_ajax.php\'\n    #post_var = {\'pselyr\': semester, \'pselclss\': classid}\n    post_var = {\'pselyr\': semester, \'pselclss\': selclss}\n\n    result = requests.post(url, data = post_var, headers = headers)\n    #soup = bs4.BeautifulSoup(result.content, \'lxml\')\n    soup = bs4.BeautifulSoup(result.content, \'lxml\', from_encoding=\'utf-8\')\n    # 列出 soup 物件的字元\n    #print(str(soup))\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n    # 添加border屬性\n    table[\'border\'] = "1"\n    # 返回帶有border屬性的table HTML\n    table_html = table.prettify()\n    return table_html\n    #return  str(pselyr) + " + " +str(pseqno)\n\nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=9447, debug=True, ssl_context="adhoc") \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': '第六週作業內容', 'text': '\n \n Git  的發展歷史 \n Git 是一個分散式版本控制軟體，最初 由林納斯·托瓦茲創作 ，於2005年以 GPL 授權條款釋出 。最初目的是為了更好地管理 Linux核心 開發而設計 。Git 最初的開發動力來自於 BitKeeper 和 Monotone 。Git 最初只是作為一個可以被其他前端（比如Cogito或Stgit ）包裝的後端而開發的， 但後來Git核心已經成熟到可以獨立地用作版本控制 。 \n 在2002年時，Linux kernel 開始採用名為 BitKeeper 的商業分散式版本控制系統 。在2005年時，開發 Linux kernel 的社群與開發 BitKeeper 的商業公司的合作關係結束，也就無法再免費使用該工具 。這就迫使了 Linux 社群（特別是 Linux 之父 Linus Torvalds）基於使用 BitKeeper 所學到的經驗，來開發自有的工具 。 這個系統必須達成下列目標：快速、簡潔的設計、完整支援非線性的開發（上千個同時進行的分支）、完全的分散式系統、能夠有效地處理像 Linux kernel 規模的專案（速度及資料大小） 。 \n 創作人的相關履歷 \n 林納斯·托瓦茲是 Git 的創作者，他也是 Linux 的創始人。 他在芬蘭赫爾辛基大學學習，並在1991年首次發布了 Linux。他的目標是創建一個自由且開放的作業系統。在2005年，他開始開發 Git，這是一個源於他對 Linux 核心開發的需求的項目。他的貢獻對開源社區產生了深遠影響，並且他的工作繼續影響著全球數以百萬計的開發者。 \n 如何利用 Git  解決內容管理問題 \n Git 是一個強大的工具，可以幫助開發者和團隊管理和追蹤專案的變更。以下是一些使用 Git 解決內容管理問題的方法： \n \n 版本控制 ：Git 提供了一種機制，可以追蹤和管理文件的變更。這意味著您 可以查看文件的歷史版本，並在需要時恢復到任何特定版本 。 \n 分支和合併 ： Git 允許開發者創建分支 ，這是一種獨立於主開發線的工作流。這意味著您可以在不影響主代碼庫的情況下進行實驗或添加新功能。完成後，您可以將分支合併回主代碼庫 。 \n 協作 ：Git 的分散式性質意味著每個開發者都可以在本地工作，並將更改推送到 共享的代碼庫 。這使得 團隊協作變得更加容易 。 \n 衝突解決 ：當多個開發者在同一時間對同一文件進行更改時，可能會出現衝突。Git 提供了工具來幫助開發者識別和解決這些衝突 。 \n \n 在 Windows  實際 demo git client  與 git server \n 在 Windows 上設置 Git 客戶端和服務器的步驟如下 ： \n \n 安裝 Git ：首先，您需要在您的 Windows 機器上安裝 Git。您可以從 Git 的官方網站下載並安裝它。 \n 設置 Git  服務器 ：如果您想在本地機器上設置一個 Git 服務器，您可以使用像 Bonobo Git Server 這樣的工具。只需將物理路徑設置為之前安裝 Bonobo Git Server 的路徑，並選擇一個未被占用的端口 。 \n 使用 Git  客戶端 ：有許多 Git 客戶端可供選擇，包括命令行工具和圖形用戶界面。一個常見的選擇是 GitHub Desktop，它提供了一個易於使用的界面，可以克隆存儲庫，提交更改，並與遠程存儲庫同步 。 \n \n GitHub  操作流程 \n GitHub 是一個基於 Git 的在線服務，它提供了一個平台，開發者可以在上面托管和共享他們的代碼。以下是在 GitHub 上的一般操作流程： \n \n 創建帳戶 ：首先，您需要在 GitHub 上創建一個帳戶 。 \n 創建或克隆存儲庫 ：在 GitHub 上，您可以創建自己的存儲庫，或者克隆其他人的存儲庫 。 \n 提交更改 ：當您對存儲庫中的文件進行更改後，您可以提交這些更改。這將創建一個新的版本，並將其保存在 Git 歷史中 。 \n 推送和拉取 ：您可以將您的更改推送到 GitHub 存儲庫，以便其他人可以看到和訪問它們。同樣，您也可以拉取其他人的更改，以便將它們合併到您的本地版本 。 \n 處理拉取請求 ：如果您想將您的更改合併到主分支，或者如果您想貢獻到其他人的項目，您可以創建一個拉取請求。這是一種請求，要求其他人審查和接受您的更改 。 \n \n \xa0 \n \n \n \n \n \n', 'tags': '', 'url': '第六週作業內容.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};