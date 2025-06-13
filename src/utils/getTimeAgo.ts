/**
 * 입력된 날짜가 현재로부터 얼마나 지났는지 상대적 또는 절대적 시간 문자열로 반환합니다.
 *
 * @param dateString - 비교할 날짜(문자열)
 * @param now - 기준 시각(기본값: 현재 시각)
 * @param locale - 반환할 언어(기본값: 'ko')
 * @returns 상대적 시간 문자열 또는 절대 날짜 (예: '5분 전', '2일 전', '2025-05-24')
 */
export function getTimeAgo(
  dateString: string,
  now: Date = new Date(),
  locale = 'ko',
): string {
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  // 미래 시점은 빈 문자열 반환
  if (diffInSeconds < 0) {
    return '';
  }

  // 1주일(7일) 이상 차이나면 절대적 날짜로 반환
  const secondsInWeek = 60 * 60 * 24 * 7;
  if (diffInSeconds >= secondsInWeek) {
    return past.toISOString().split('T')[0]; // yyyy-MM-dd 형식으로 반환
  }

  const relativeFormatter = new Intl.RelativeTimeFormat(locale, {
    numeric: 'always',
  });

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
    ['second', 1],
  ];

  for (const [unit, secondsInUnit] of units) {
    const delta = Math.floor(diffInSeconds / secondsInUnit);
    if (delta !== 0) {
      return relativeFormatter.format(-delta, unit);
    }
  }

  return '방금 전';
}
