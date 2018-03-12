require 'test_helper'

class PhotosControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get photos_create_url
    assert_response :success
  end

end
