// 实体字符转化

function escapeHTML (htmlStr) {
	return (((htmlStr.replace(/&/g, '&amp;')).replace(/</g, '&lt;')).replace(/>/g, '&gt;')).replace(/"/g, '&quot;')
}
// /&/g, '&amp'
// /</g, '&lt;'
// />/g, '&gt;'
// /&/g, '&amp'