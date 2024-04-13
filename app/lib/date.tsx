// date-fns is a modern JavaScript date utility library
// https://date-fns.org/
import { format } from 'date-fns'

export default function DateComponent({ dateString }: { dateString: string }) {
  // 明示的に any 型を指定して、TypeScript のエラーを回避する
  const date = new Date(dateString as any);

  // date-fnsのformat関数を使って、望む形式にフォーマットする
  return <time dateTime={date.toISOString()}>{format(date, 'LLL d, yyyy')}</time>
  // view different format() string options here:
  // https://date-fns.org/v2.16.1/docs/format
}
