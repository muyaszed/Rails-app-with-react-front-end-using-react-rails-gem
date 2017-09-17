require 'rails_helper'
require 'support/home'

feature "blog post" do

	let(:home) {Home.new}
	let(:post) {FactoryGirl.create(:post)}
	scenario "new post", :js => true do
		home.visit_homepage.new_post(post).submit
		expect(page).to have_content(post.title)

	end
end

