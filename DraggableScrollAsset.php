<?php
/**
 * Created by Visual Studio Code.
 * User: jvlasova
 * Date: 18.03.21 
 * Time: 12:51
 */

namespace frontend\assets\components\scroll;

use frontend\assets\AssetBundle;

class DraggableScrollAsset extends AssetBundle
{
	public $sourcePath = '@webroot/themes/basic';

	public $js = [
		'https://code.jquery.com/ui/1.13.2/jquery-ui.js',
		'js/common-theme/components/scroll/draggable-scroll.js',
	];

	public $jsOptions = [
		'defer' => 'defer',
		'position' => \yii\web\View::POS_END,
	];

	public $depends = [
		'yii\web\JqueryAsset',
	];
}
