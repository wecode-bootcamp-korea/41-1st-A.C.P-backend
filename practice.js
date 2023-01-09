const andclause = ``;

function queryBuilder(sizes, postions, moods, difficulties, cares) {
  // 각 값들을 controllers에서 {}구조분해할당으로 받아야함.

  if (sizes) {
    andclause += `AND sizes.id IN ${sizes.toString()}`; //sizes가 배열로 들어오기때문에 후에 수정 필요.
  }

  if (postions) {
    andclause += `AND positions.id IN ${positions.toString()}`;
  }

  if (moods) {
    andclause += `AND moods.id IN ${moods.toString()}`;
  }

  if (difficulties) {
    andclause += `AND difficulties.id IN ${difficulties.toString()}`;
  }

  if (cares) {
    andclause += `AND cares.id IN ${cares.toString()}`;
  }

  return (andclause = andclause + ";");
}
