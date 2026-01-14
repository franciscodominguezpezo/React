type Props = {
  name: string;
};

export function PlayerCard({ name }: Props) {
  return (
    <div className="card p-2">
      <strong>{name}</strong>
    </div>
  );
}
