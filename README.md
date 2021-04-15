# 중앙대학교 레인보우시스템 데이터 api

## **데이터 업데이트: 2020-04-13**

## install

```
$ git clone https://github.com/rudy3091/cau-rainbowsystem-data.git
$ cd cau-rainbowsystem-data
$ npm install (or $ yarn)
$ npm start (or $ yarn start)

listening on port 8080
```

## endpoints

### `GET /api/rainbow?rows={row_num}&page={page_num}`

- **비교과프로그램 데이터를 페이지로 나눠 Array 형식으로 반환**
- row_num: 한 페이지에 들어갈 데이터의 수
- page_num: 페이지 번호

#### Response

```
[
  {
    id: number,
    title: string,
    url: string,
    due: {
      from: {
        year: string, // yyyy
        month: string, // mm
        date: string // dd
      },
      to: {
        year: string,
        month: string,
        date: string
      }
    }
    offered: {
      from: {
        year: string,
        month: string,
        date: string
      },
      to: {
        year: string,
        month: string,
        date: string
      }
    }
    available: string // "신청가능" | "신청마감" | "교육종료" | "교육중" | "none";
  },
]
```

---

## Links

[레인보우시스템](http://rainbow.cau.ac.kr/)

[레인보우시스템 비교과프로그램](http://rainbow.cau.ac.kr/site/reservation/lecture/lectureList?menuid=001002002&submode=lecture&reservegroupid=1)
