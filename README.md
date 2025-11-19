# 채용 과제

## 개발 환경

- Node.js: 20.19.5
- npm
- TypeScript 5
- Next.js 16.0.3, React 19.2.0
- Tailwind CSS 4
- Shadcn UI

## 환경 변수

```
NEXT_PUBLIC_API_BASE_URL=https://recruit.paysbypays.com/api/v1
```

## 실행

```bash
# 의존성 설치
npm install

# 실행
npm run dev
```

## 주요 개발 내용
> "결제/가맹점 관련 데이터를 시각화하는 대시보드 화면 페이지를 구현"
> "결제대행사(PG) 도메인에 적합한 내용을 구성"

### 주요 페이지

> [구현내용 정리 바로가기](./docs/구현내용정리.md)

1. 첫 대시보드 페이지 (/dashboard)
2. 거래 내역 리스트 페이지 (/payments)
3. 가맹점 페이지 (/merchants)
4. 가맹점 상세 페이지 (/merchants/{mchtCode})

#### 디자인 의도 및 주요 UI/UX 포인트
- 시각적인 직관성을 위해, 대시보드 형태의 카드 디자인
- 데이터 시각화를 위해 chart.js 사용
- 일관성있는 UI를 위해 Shadcn UI 사용

## 프로젝트 구조
> FSD (Feature-Sliced Design) 방식으로 구현

[프로젝트 구조 바로가기](./docs/프로젝트구조.md)