require 'test_helper'

class Api::PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_posts_create_url
    assert_response :success
  end

  test "should get update" do
    get api_posts_update_url
    assert_response :success
  end

  test "should get show" do
    get api_posts_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_posts_destroy_url
    assert_response :success
  end

end
