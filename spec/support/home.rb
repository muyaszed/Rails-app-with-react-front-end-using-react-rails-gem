class Home
	include Capybara::DSL

	def visit_homepage
		visit('/')
		self
	end

	def new_post(post)
		click_on('New Post')
		fill_in("title", with: post.title)
		fill_in("content", with: post.content)
		self
	end

	def submit
		click_on("Submit post")
		self
	end

end