import { useNavigate } from 'react-router-dom';

const Categories = ({ onSelect, category }) => {
	const categories = [
		{
			name: 'title',
			text: 'title'
		},
		{
			name: 'year',
			text: 'year'
		},
		{
			name: 'rating',
			text: 'rating'
		},
		{
			name: 'runtime',
			text: 'runtime'
		},
		{
			name: 'genres',
			text: 'genres'
		}
	];
	const navigate = useNavigate();
	return (
		//카테고리 wrap
		<div className="CategoriesBlock">

			11
			{/* map 메서드로 각 카테고리들(NavLink)을 생성 */}
			{categories.map((c) => (
				//key에는 고유한 이름이 들어가도록 c.name을 쓴다
				<div className="Category" key={c.name}
					//active 상태면 active 클래스를, 아니면 그없
					//className={({ isActive }) => (isActive ? 'active' : undefined)}
					//NavLink의 주소! 
					//'all'이면 기본페이지로 그 외의 카테고리면 '/카테고리이름'
					onClick={() => { navigate(c.name === 'all' ? '/' : `/${c.name}`) }}
				>
					{c.text}
				</div>
			))}
		</div>
	);
};

export default Categories;