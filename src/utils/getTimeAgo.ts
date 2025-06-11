/**
 * 입력된 날짜가 현재로부터 얼마나 지났는지 상대적 시간 문자열로 반환합니다.
 *
 * @param dateString - 비교할 날짜(문자열)
 * @param now - 기준 시각(기본값: 현재 시각)
 * @param locale - 반환할 언어(기본값: 'ko')
 * @returns 상대적 시간 문자열 (예: '5분 전', '2일 전', '방금 전')
 */
export function getTimeAgo(
  dateString: string,
  now: Date = new Date(),
  locale = 'ko',
): string {
  // 입력된 날짜를 Date 객체로 변환
  const past = new Date(dateString);
  // 현재와 입력 날짜의 차이를 초 단위로 계산
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  // 미래 시점이면 그냥 return
  if (diffInSeconds < 0) {
    return '';
  }

  // 상대적 시간 포맷터 생성 (ex: '5분 전', '2일 전')
  const relativeFormatter = new Intl.RelativeTimeFormat(locale, {
    numeric: 'always',
  });

  // 각 단위별 초(second) 환산값
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30],
    ['week', 60 * 60 * 24 * 7],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
    ['second', 1],
  ];

  // 큰 단위부터 차이가 나는 첫 단위로 반환
  for (const [unit, secondsInUnit] of units) {
    const delta = Math.floor(diffInSeconds / secondsInUnit);
    if (delta !== 0) {
      // 음수로 전달해 'n분 전'과 같이 과거 시점 표현
      return relativeFormatter.format(-delta, unit);
    }
  }

  // 모든 단위가 0이면 '방금 전' 반환
  return '방금 전';
}
