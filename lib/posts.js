import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDirectory = path.join( process.cwd(), 'posts' ) //現在のプロセスのカレントディレクトリを調べる
const fileNames = fs.readdirSync( postsDirectory )

export function getSortedPostsData () {
    //console.log( fileNames ) // pre-renderingとssg-ssrが取れる

    const allPostsData = fileNames.map( fileName => {
        // id を取得するためにファイル名から ".md" を削除する
        const id = fileName.replace( /\.md$/, '' )
       // console.log( id ) // pre-renderingとssg-ssrが取れる

        // マークダウンファイルを文字列として読み取る
        const fullPath = path.join( postsDirectory, fileName )
       // console.log( fullPath ) // pre-renderingとssg-ssrが取れる

        const fileContents = fs.readFileSync( fullPath, 'utf8' )
      //  console.log( fileContents ) // ファイルに書かれてる中身をそのまま取得する

        // 投稿のメタデータ部分を解析するために gray-matter を使う
        const matterResult = matter( fileContents )
        // データを id と合わせて返す
        return {
            id,
            ...matterResult.data
        }
    } )
    // 投稿を日付でソートする
    return allPostsData.sort( ( a, b ) => {
        if ( a.date < b.date ) {
            return 1
        } else {
            return -1
        }
    } )
}

export function getAllPostIds() {
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents)

    // データを id と組み合わせる
    return {
      id,
      content: matterResult.content,
      ...matterResult.data
    }
  }
