# Trip-Recommender

![triprecommender](https://github.com/user-attachments/assets/305b0962-a857-47fe-bf1e-459aeb6a0b47)

# 소개

특정 주소나 위치를 검색했을 때 ai에게 여행 추천을 받아서 사용자에게 보여주는 라이브러리


### 설치

```bash
$ npm install trip-recommender
```

### Github
[Trip-Recommender / Github](https://github.com/sanholl/trip-recommender)

### 샘플


# 구조

```javascript
// index.d.ts
declare module 'trip-recommender' {
  ...
  export const ChatResponse: React.FC<ChatResponseProps>;
  export const SelectList: React.FC<SelectListProps>;
  export const RecommendationList: React.FC<RecommendationListProps>;
  export const ChatLoading: React.FC;
  export const Error: React.FC<ErrorProps>;
}
```




# 타입

```javascript
export interface ChatResponseProps {
  keyword: string;
  openAiKey: string;
}
export interface TripActivity {
  placeType: string;
  name: string;
  description: string;
  location: string;
  recommendedMenu?: string;
  link: string;
}
export interface RecommendationType {
  tripType: string;
  tripStyle: string;
  tripActivities: TripActivity[];
}
export interface RecommendationListProps {
  recommendation: RecommendationType;
}
export interface SelectListProps {
  onSelection: (who: string[], interest: string[]) => void;
}
export interface ChatResponseType {
  destination: string;
  recommendation: RecommendationType;
}

export interface ErrorProps {
  message: string;
}
```





## ChatResponse

선택된 장소, 위치와 관련되어 ai의 여행 추천을 보여주는 컴포넌트

```javascript
<ChatResponse
  keyword={keyword}
  openAiKey={OPEN_AI_KEY}
/>
```

#### Props

| 이름        | 설명                            | 타입   | 기타 |
| ----------- | ------------------------------- | ------ | ---- |
| `keyword`   | 여행 추천에 사용될 검색 keyword | String |      |
| `openAiKey` | open ai에서 발급받은 secret key | String |      |





## SelectList

사용자의 요구 조건을 최대한 근접한 답변을 내놓기 위한 추가 선택을 위한 옵션들을 보여주는 컴포넌트

```javascript
<SelectList onSelection={handleSelection} />
```

#### Props

| 이름              | 설명                             | 타입            | 기타 |
| ----------------- | -------------------------------- | --------------- | ---- |
| `handleSelection` | 선택되는 추가 옵션을 다루는 함수 | SelectListProps |      |

#### 예시

![selectList](https://github.com/user-attachments/assets/32c232fd-946e-4a29-b22d-0ff701d9704b)






## RecommendationList

open ai의 응답 결과 값을 이용하여 `추천 일정` 을 보여주는 컴포넌트

```javascript
<RecommendationList response={response} />
```

#### Props

| 이름       | 설명                       | 타입             | 기타 |
| ---------- | -------------------------- | ---------------- | ---- |
| `response` | open ai의 JSON 형태의 응답 | ChatResponseType |      |

#### 예시

![recommendationList](https://github.com/user-attachments/assets/98769a4b-9d72-4a3d-8311-8159d1a15074)






## ChatLoading

ai 답변이 오기전 로딩 화면

```javascript
<ChatLoading />
```

#### 예시

![loading](https://github.com/user-attachments/assets/ed77ed76-efc4-4bd1-9c3a-514988f0b8d5)






## Error

error에 대한 화면을 보여주는 컴포넌트

```javascript
<Error message={message} />
```

#### Props

| 이름       | 설명                       | 타입             | 기타 |
| ---------- | -------------------------- | ---------------- | ---- |
| `message` | error 메세지 | string |      |

#### 예시

![error](https://github.com/user-attachments/assets/547f4464-a71b-4c0e-9770-016b64b63546)