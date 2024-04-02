export default function getAttackTypes({ special }) {
  const result = [];

  for (const { id, icon, description = 'Описание недоступно' } of special) {
    const obj = {
      id,
      icon,
      description,
    };

    result.push(obj);
  }

  return result;
}