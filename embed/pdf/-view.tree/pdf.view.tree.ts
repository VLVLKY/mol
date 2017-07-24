namespace $ { export class $mol_embed_pdf extends $mol_scroll {

	/// uri \
	uri() {
		return ""
	}

	/// pages /
	pages() {
		return [] as any[]
	}

	/// Pages $mol_list rows <= pages
	@ $mol_mem()
	Pages() {
		return (( obj )=>{
			obj["rows"] = () => this.pages()
			return obj
		})( new $mol_list )
	}

	/// sub / <= Pages
	sub() {
		return [].concat( this.Pages() )
	}

	/// page!index null
	page( index : any ) {
		return <any> null
	}

	/// Page!index $mol_embed_pdf_page page <= page!index
	@ $mol_mem_key()
	Page( index : any ) {
		return (( obj )=>{
			obj["page"] = () => this.page(index)
			return obj
		})( new $mol_embed_pdf_page )
	}

} }

namespace $ { export class $mol_embed_pdf_page extends $mol_view {

	/// dom_name \canvas
	dom_name() {
		return "canvas"
	}

	/// page null
	page() {
		return <any> null
	}

	/// max_width 640
	max_width() {
		return 640
	}

	/// scale_over 1.25
	scale_over() {
		return 1.25
	}

	/// scale?val 1
	@ $mol_mem()
	scale( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 1
	}

	/// Touch $mol_touch zoom?val <=> scale?val
	@ $mol_mem()
	Touch() {
		return (( obj )=>{
			obj["zoom"] = ( val? : any ) => this.scale( val )
			return obj
		})( new $mol_touch )
	}

	/// plugins / <= Touch
	plugins() {
		return [].concat( this.Touch() )
	}

	/// zoom 0.8
	zoom() {
		return 0.8
	}

	/// style * zoom <= zoom
	style() {
		return ({
			"zoom" :  this.zoom() ,
		})
	}

	/// width 0
	width() {
		return 0
	}

	/// height 0
	height() {
		return 0
	}

	/// field * 
	/// 	width <= width 
	/// 	height <= height
	field() {
		return ({
			"width" :  this.width() ,
			"height" :  this.height() ,
		})
	}

} }
